export default function SectionTitle({
    title,
    centered = true,
    size = 2
}: { title: string, centered?: boolean, size?: 2 | 3 })
{
    let classNames: string = size == 2 ? "text-3xl" : "text-2xl";

    classNames += " mb-5";
    if (centered)
        classNames += " text-center";
    if (size == 3) {
        return (<h3 className={classNames}>{title}</h3>)
    }
    return (
        <h2 className={classNames}>{title}</h2>
    )
}