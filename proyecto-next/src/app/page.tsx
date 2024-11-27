import styles from './page.module.css';



export default function Home() {
  return (
    <div className={styles.page}>

      {/* aqui colocamos el navbar para que aparezca en la pagina de home */}



      <main className={styles.main}>
        <h1> bienvenido a mi pagina de inicio </h1>
        {/* agrear contenido de tu pagina aqui */}
        </main>

        <footer className={styles.footer}>
          <p>2024 &copy; Todos los derechos reservados </p>
        </footer>
      </div>
  );
}