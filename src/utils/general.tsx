export const FormatDate = (date: Date, type: "date" | "time" | "datetime") => { 
    if (!date) return;

    const year = date.getFullYear();
    const mounth = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    if (type === "date") {
        return `${day}/${mounth}/${year}`;
    }

    if (type === "time") {
        return `${hour}h ${minutes}m`
    }

    if (type === "datetime") {
        return `${day} de ${mounth} de ${year} as ${hour}h ${minutes}m`
    }
}