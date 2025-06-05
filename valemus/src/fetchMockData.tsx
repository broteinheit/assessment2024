

export const fetchJson = async (filename: string) => {
    const file = await fetch(`/${filename}`);
    
    if (file.ok) {
        return await file.json();
    }
}