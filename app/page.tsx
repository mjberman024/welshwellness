import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const skills1 = [
    "Anxiety",
    "Children struggling with divorce",
    "Communication Difficulties",
    "Conflict resolution",
    "Cutting",
    "Depression",
    "Exposure therapy",
    "Family counseling",
    "Gender identity /sexual identity/LGBTQ",
    "Generalized anxiety",
    "Impulsivity/focus/ADHD",
    "Lack of Coping Skills",
    "Learning differences",
  ];

  const skills2 = [
    "Low Self-esteem",
    "Obsessive compulsive disorder (OCD)",
    "Parenting support",
    "Perinatal/ postpartum depression",
    "Relationship Struggles",
    "School related concerns",
    "Sensory disorders",
    "Social Skills Challenges",
    "Stress management",
    "Suicidal ideation",
    "Work and career issues",
    "Working with families who have children with genetic disorder",
  ];

  return (
    <main>
      <div className={styles.header}>
        <p id="title">Welsh Wellness and Counseling</p>
        <p id="name">Erin Welsh, LCPC</p>
      </div>
      <div className={styles.main}>
        <div className={styles.bio}>
          <div style={{ width: "50vh", height: "auto", position: "relative" }}>
            <Image
              className={styles.headshot_img}
              src="https://welsh-wellness.s3.amazonaws.com/images/headshot.JPG"
              alt="Erin headshot"
              fill
              objectFit="contain"
            />
          </div>
          <div className={styles.bio_blurb}>
            <p>
              I help children, adolescents, adults, caregivers, and people
              wanting to grow their families. I have a wealth of experience,
              training, and knowledge in many areas, and my goals are to work
              with my client to reach their highest potential. My therapeutic
              approach is focused on a collaborative effort to identify
              individual strengths and needs, develop meaningful goals, and to
              explore the necessary steps to attain those goals. My approach
              leads to increased self-esteem, learning, and attaining the
              supports that are out there — and teaching you to learn how to
              transition to a positive lens.
            </p>
          </div>
        </div>

        <div className={styles.creds}>
          <div className={styles.content}>
            <div
              style={{ width: "300px", height: "325px", position: "relative" }}
            >
              <Image
                className={styles.therapist_image}
                src="https://welsh-wellness.s3.amazonaws.com/images/fam5.jpg"
                alt="Erin Therapist"
                fill
                objectFit="contain"
              />
            </div>
            <div style={{ textAlign: "start", flex: 1 }}>
              <h2 style={{ textAlign: "center" }}>Get to know me...</h2>
              <div style={{ marginLeft: "24px" }}>
                <p>
                  Erin has provided counseling services for children,
                  adolescents, caregivers, families struggling to conceive,
                  families who have children with learning differences and
                  genetic disorders. She works in a school for children with
                  learning differences and has successfully opened her private
                  practice to continue helping families outside of the school
                  day. Her goal is to help all of her clients manage various
                  emotional and behavioral concerns and provide them with tools
                  to help them be successful throughout their life. Erin is an
                  experienced, warm, and strength, solution, and cognitive
                  focused counselor, who brings her clinical skills to her
                  private practice.
                </p>
                <p>
                  Erin earned her graduate degree in Professional Counseling
                  from Loyola University Maryland, where she received a masters
                  in school counseling. She then continued to gain her NCC and
                  LCPC.
                </p>
                <p>
                  Erin loves skiing, yoga, and spending her time with her
                  family. She is also a huge believer in counseling and isn not
                  one to shy away from going to her own counselor. She loves to
                  continue her education and learn from every person she meets.
                  She believes that her learning is something that will never
                  end, and that is what makes her so passionate about counseling
                  and helping her clients achieve success no matter what out of
                  the box idea it takes. Erin is also married and has two young
                  sons.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.topics}>
          <div>
            <h2>Services and Skills</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                {skills1.map((skill) => (
                  <p key={skill} style={{ textAlign: "center" }}>
                    {skill}
                  </p>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                {skills2.map((skill) => (
                  <p key={skill} style={{ textAlign: "center" }}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ width: "300px", height: "325px", position: "relative" }}
            >
              <Image
                className={styles.therapist_image}
                src="https://welsh-wellness.s3.amazonaws.com/images/erin_about.jpg"
                alt="Erin Therapist"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className={styles.services}>
          <div className={styles.servicesContent}>
            <div>
              <div
                style={{
                  width: "300px",
                  height: "325px",
                  position: "relative",
                }}
              >
                <Image
                  className={styles.therapist_image}
                  src="https://welsh-wellness.s3.amazonaws.com/images/e+and+j.JPG"
                  alt="Erin Therapist"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={styles.approachContent}>
              <h2 style={{ textAlign: "center" }}>Approach</h2>
              <p>A treatment that is as unique as your situation</p>
              <p>
                Erin is a believer that each case should be treated as each
                client is unique and therefore utilizes an eclectic sources of
                techniques.
              </p>
              <p>
                When working with children as young as four, she believes that
                parent involvements is essential and likes to work with both the
                parents and the child individually and in a group setting. This
                may include adding in siblings or other family members so
                everyone can work as a whole to benefit the child and family.{" "}
              </p>
              <p>
                Erin wants her clients to learn how to control their negative
                self-talk, and therefore, will utilize cognitive behavioral
                strategies.
              </p>
              <p>
                She also does not shy away from multisensory and tactile work
                with her younger clientele.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.additional}>
          <h2 style={{ textAlign: "center" }}>Additional Credentials</h2>
          <div>
            <p>
              In addition to her state licenses, Erin is a National Certified
              Counselor (NCC). The NCC is the premier certification for the
              counseling profession. Holding the NCC demonstrates to colleagues
              and the public that you have voluntarily met high national
              standards for the practice of counseling.
            </p>
            <p>
              Erin is also a member of the ACA (The American Counseling
              Association).
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          <a
            className={styles.email}
            href="mailto:Welshwellnessandcounseling@gmail.com"
          >
            Email Me
          </a>
        </p>
        <p>
          <a className={styles.phone} href="tel:4433537479">
            Call Me (443) 353-7479
          </a>
        </p>
        <p>
          <a
            className={styles.facebook}
            href="https://www.facebook.com/welshwellnessandcounseling"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
      </div>
    </main>
  );
}
