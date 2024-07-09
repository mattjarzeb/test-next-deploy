import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
Login          <a href={'/login'}>login</a>
        </p>
      </div>
    </main>
  );
}
