export const generateSlug = (nickname, tag) => {
  const timestamp = Date.now(); // para asegurarte unicidad
  const base = `${nickname}-${tag}-${timestamp}`;
  return base
    .toLowerCase()
    .replace(/\s+/g, "-") // espacios a guiones
    .replace(/[^\w\-]+/g, "") // eliminar caracteres no válidos
    .replace(/\-\-+/g, "-") // evitar dobles guiones
    .replace(/^-+/, "") // quitar guiones al inicio
    .replace(/-+$/, ""); // quitar guiones al final
}

