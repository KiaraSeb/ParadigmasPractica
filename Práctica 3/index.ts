import { FileSystem } from './FileSystem';

const fs = new FileSystem();

fs.mkdir("documents");
fs.cd("documents");
fs.touch("file1.txt");
fs.touch("file2.txt");
fs.mkdir("photos");
fs.cd("photos");
fs.touch("photo1.png");
fs.cd(".."); // Volver a la carpeta anterior
fs.ls();     // Lista los archivos y carpetas en "documents"
fs.pwd();    // Muestra la ruta actual
fs.lsp();    // Guarda todos los archivos en display.txt
