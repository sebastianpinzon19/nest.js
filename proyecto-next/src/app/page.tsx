import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a Mi Página de Inicio</h1>
        <p className={styles.subtitle}>Explora nuestros productos de primeros auxilios</p>
      </header>

      <main className={styles.main}>
        <section className={styles.cardsSection}>
          <h2 className={styles.sectionTitle}>Nuestros Productos de Primeros Auxilios</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Botiquín de Primeros Auxilios</h3>
              <p>
                Nuestro botiquín de primeros auxilios es un conjunto completo diseñado para atender emergencias médicas en el hogar, la oficina o durante actividades al aire libre. 
                Incluye una variedad de vendajes, gasas estériles, antisépticos, tijeras, pinzas y otros suministros esenciales. 
                Este botiquín es ideal para cualquier situación, desde cortes y rasguños hasta lesiones más graves, asegurando que estés preparado para cualquier eventualidad.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Desfibrilador Externo Automático (DEA)</h3>
              <p>
                El desfibrilador externo automático (DEA) es un dispositivo vital que puede marcar la diferencia entre la vida y la muerte en caso de un paro cardíaco. 
                Diseñado para ser utilizado por cualquier persona, el DEA proporciona instrucciones claras y audibles para guiar al usuario a través del proceso de reanimación. 
                Con su tecnología avanzada, el DEA analiza el ritmo cardíaco y administra una descarga eléctrica si es necesario, ayudando a restaurar el ritmo normal del corazón.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Venda Elástica</h3>
              <p>
                La venda elástica es un elemento esencial en cualquier botiquín de primeros auxilios. 
                Su diseño flexible permite estabilizar lesiones, como esguinces y torceduras, proporcionando soporte y compresión. 
                Ideal para el tratamiento de lesiones deportivas, la venda elástica es fácil de aplicar y se adapta a diferentes partes del cuerpo, ayudando a reducir la inflamación y acelerar la recuperación.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Acerca de Nosotros</h2>
          <p>
            En Fusdec, nos dedicamos a proporcionar productos de primeros auxilios de alta calidad que garantizan la seguridad y el bienestar de nuestros clientes. 
            Nuestra misión es equipar a las personas con las herramientas necesarias para manejar emergencias médicas de manera efectiva y rápida. 
            Creemos que la preparación es clave para salvar vidas, y estamos comprometidos a ofrecer productos accesibles y confiables para todos.
          </p>
          <p>
            Nuestra visión es ser líderes en el mercado de productos de primeros auxilios, reconocidos por nuestra innovación, calidad y compromiso con la educación en salud. 
            Aspiramos a crear una comunidad más segura y consciente, donde cada persona esté preparada para actuar en situaciones de emergencia. 
            A través de la educación y la concienciación, buscamos empoderar a las personas para que tomen decisiones informadas sobre su salud y la de los demás.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>2024 &copy; Todos los derechos reservados</p>
      </footer>
    </div>
  );
}