import os
#PRACTICA 3
class File:
    def __init__(self, name):
        self.name = name

class Directory:
    def __init__(self, name, parent=None):
        self.name = name
        self.parent = parent
        self.children = []

    def add_directory(self, name):
        if any(isinstance(child, Directory) and child.name == name for child in self.children):
            return f"Error: Directory '{name}' already exists."
        new_directory = Directory(name, self)
        self.children.append(new_directory)
        return f"Directory '{name}' created."

    def add_file(self, name):
        if any(isinstance(child, File) and child.name == name for child in self.children):
            return f"Error: File '{name}' already exists."
        new_file = File(name)
        self.children.append(new_file)
        return f"File '{name}' created."

    def find_child(self, name):
        for child in self.children:
            if isinstance(child, Directory) and child.name == name:
                return child
        return None

    def get_path(self):
        if not self.parent:
            return self.name
        return os.path.join(self.parent.get_path(), self.name)

    def list_contents(self):
        return '\n'.join(sorted(child.name for child in self.children))

    def list_contents_to_file(self):
        with open('display.txt', 'w') as f:
            f.write(self.list_contents())

class FileSystem:
    def __init__(self):
        self.root = Directory('root')
        self.current_directory = self.root

    def mkdir(self, name):
        return self.current_directory.add_directory(name)

    def touch(self, name):
        return self.current_directory.add_file(name)

    def cd(self, name):
        if name == '..':
            if self.current_directory.parent:
                self.current_directory = self.current_directory.parent
                return "Moved to parent directory."
            else:
                return "Error: Already at root directory."
        else:
            dir = self.current_directory.find_child(name)
            if dir:
                self.current_directory = dir
                return f"Changed directory to '{name}'."
            else:
                return f"Error: Directory '{name}' not found."

    def ls(self):
        return self.current_directory.list_contents()

    def lsp(self):
        self.current_directory.list_contents_to_file()
        return "Contents saved to 'display.txt'."

    def pwd(self):
        return self.current_directory.get_path()

class TerminalInterface:
    def __init__(self):
        self.file_system = FileSystem()

    def read(self):
        return input('>: ').split()

    def write(self, message):
        print(message)

    def start(self):
        print('File system initialized.')
        while True:
            command, *args = self.read()
            arg = args[0] if args else ''
            if command == 'mkdir':
                self.write(self.file_system.mkdir(arg))
            elif command == 'touch':
                self.write(self.file_system.touch(arg))
            elif command == 'cd':
                self.write(self.file_system.cd(arg))
            elif command == 'ls':
                self.write(self.file_system.ls())
            elif command == 'lsp':
                self.write(self.file_system.lsp())
            elif command == 'pwd':
                self.write(self.file_system.pwd())
            else:
                self.write('Unknown command.')

# Iniciar la interfaz de terminal
if __name__ == "_main_":
    TerminalInterface().start()