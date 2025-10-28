const projects = [
  { title: "Aplikasi To-Do", desc: "Aplikasi daftar tugas dengan React" },
  { title: "Portfolio", desc: "Website pribadi untuk menampilkan karya" },
  { title: "Blog Sederhana", desc: "Blog dengan Next.js dan Markdown" },
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "40px" }}>
      <h1>Proyek Saya</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i} style={{ marginBottom: "15px" }}>
            <strong>{p.title}</strong> — {p.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
