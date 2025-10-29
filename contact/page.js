const contacts = [
    { title: "Discord", desc:"tuuur." },
    { title: "Instagram", desc:"@ptuurrhmn" },
    { title: "Tiktok", desc:"tuuur." },
];

export default function ContactPage() {
    return (
        <section style={{ padding: "40px"}}>
            <h1>Kontak Saya</h1>
            <ul>
                {contacts.map((p, i) => (
                    <li key={i} style={{ marginBottom:"15px" }}>
                        <strong>{p.title}</strong> {p.desc}
                    </li>
                ))}
            </ul>
        </section>
    )
}