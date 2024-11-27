function normalizeText(input: string): string {
  // Valida que el input sea un string
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Define los caracteres que se reemplazarán y sus reemplazos
  const from = "séíóúáÁÉÍÓÚAEIOU";
  const to = "seiouaAEIOUaeiou";

  // Crea un mapa para hacer las sustituciones
  const mapping = new Map<string, string>();
  for (let i = 0; i < from.length; i++) {
    mapping.set(from[i], to[i]);
  }

  // Normaliza el texto eliminando espacios, caracteres especiales y convirtiendo a minúsculas
  const result = input
    .replace(/\s+/g, "") // Elimina todos los espacios
    .split("") // Convierte el string en un array de caracteres
    .map((char) => mapping.get(char) || char) // Reemplaza los caracteres o los deja intactos si no están en el mapa
    .join("") // Junta los caracteres de nuevo en un string
    .toLowerCase(); // Convierte todo el texto a minúsculas

  return result;
}

export default normalizeText;
