import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ width: "300px", height: "325px", position: "relative" }}>
        <Image
          className="headshot_img"
          src="https://welsh-wellness.s3.amazonaws.com/images/headshot.JPG"
          alt="Erin headshot"
          fill
          objectFit="contain"
        />
      </div>
      <p>Welsh Wellness and Counseling!</p>
    </main>
  );
}
