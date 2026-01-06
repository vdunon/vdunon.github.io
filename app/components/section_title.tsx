export default function SectionTitle({
    title,
    centered = true
}: { title: string, centered?: boolean })
{
    let classNames: string = "text-3xl";

    if (centered)
        classNames += " text-center";
    return (
        <h2 className={classNames}>{title}</h2>
    )
}