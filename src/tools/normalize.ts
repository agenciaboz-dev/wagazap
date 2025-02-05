const normalize = (string: string) =>
    string
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

export const slugify = (text: string): string => {
    return text
        .normalize("NFD") // Decompor em caracteres normais e diacríticos.
        .replace(/[\u0300-\u036f]/g, "") // Remover diacríticos (marcas de acento).
        .toLowerCase()
        .replace(/[^a-z0-9-_ -]/g, "") // Remover caracteres que não são letras, números, espaços ou hífens.
        .replace(/\s+/g, "_") // Substituir espaços por hífens.
        .replace(/_+/g, "_") // Substituir múltiplos hífens por um único hífen.
}

export const meta_normalize = (string: string) => slugify(string).replace(/\s/, "_")

export default normalize
