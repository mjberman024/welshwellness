import Image from "next/image";
import "@/app/globals.css";

export default function Home() {
  const skills = [
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
    <main className="flex flex-col w-full">
      <header className="text-white flex flex-col justify-center items-center py-10">
        <h1 className="text-4xl md:text-5xl">Welsh Wellness and Counseling</h1>
        <p className="text-xl mt-2">Erin Welsh, LCPC</p>
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mb-6 md:mb-0 md:mr-8">
          <Image
            src="https://welsh-wellness.s3.amazonaws.com/images/headshot.JPG"
            alt="Erin headshot"
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="max-w-2xl text-lg font-medium">
          <p>
            I help children, adolescents, adults, caregivers, and people wanting
            to grow their families. I have a wealth of experience, training, and
            knowledge in many areas, and my goals are to work with my client to
            reach their highest potential. My therapeutic approach is focused on
            a collaborative effort to identify individual strengths and needs,
            develop meaningful goals, and to explore the necessary steps to
            attain those goals. My approach leads to increased self-esteem,
            learning, and attaining the supports that are out there — and
            teaching you to learn how to transition to a positive lens.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mb-6 md:mb-0 md:mr-8">
          <Image
            src="https://welsh-wellness.s3.amazonaws.com/images/fam5.jpg"
            alt="Erin Therapist"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get to know me...
          </h2>
          <div className="space-y-4">
            <p>
              Erin has provided counseling services for children, adolescents,
              caregivers, families struggling to conceive, families who have
              children with learning differences and genetic disorders. She
              works in a school for children with learning differences and has
              successfully opened her private practice to continue helping
              families outside of the school day. Her goal is to help all of her
              clients manage various emotional and behavioral concerns and
              provide them with tools to help them be successful throughout
              their life. Erin is an experienced, warm, and strength, solution,
              and cognitive focused counselor, who brings her clinical skills to
              her private practice.
            </p>
            <p>
              Erin earned her graduate degree in Professional Counseling from
              Loyola University Maryland, where she received a masters in school
              counseling. She then continued to gain her NCC and LCPC.
            </p>
            <p>
              Erin loves skiing, yoga, and spending her time with her family.
              She is also a huge believer in counseling and isn not one to shy
              away from going to her own counselor. She loves to continue her
              education and learn from every person she meets. She believes that
              her learning is something that will never end, and that is what
              makes her so passionate about counseling and helping her clients
              achieve success no matter what out of the box idea it takes. Erin
              is also married and has two young sons.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="max-w-2xl mr-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Services and Skills
          </h2>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => (
              <p key={skill} className="m-2 p-2 bg-white rounded-full text-sm">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative mt-6 md:mt-0">
          <Image
            src="https://welsh-wellness.s3.amazonaws.com/images/erin_about.jpg"
            alt="Erin Therapist"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mb-6 md:mb-0 md:mr-8">
          <Image
            src="https://welsh-wellness.s3.amazonaws.com/images/e+and+j.JPG"
            alt="Erin Therapist"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Approach</h2>
          <p className="font-semibold mb-2">
            A treatment that is as unique as your situation
          </p>
          <div className="space-y-4">
            <p>
              Erin is a believer that each case should be treated as each client
              is unique and therefore utilizes an eclectic sources of
              techniques.
            </p>
            <p>
              When working with children as young as four, she believes that
              parent involvements is essential and likes to work with both the
              parents and the child individually and in a group setting. This
              may include adding in siblings or other family members so everyone
              can work as a whole to benefit the child and family.
            </p>
            <p>
              Erin wants her clients to learn how to control their negative
              self-talk, and therefore, will utilize cognitive behavioral
              strategies.
            </p>
            <p>
              She also does not shy away from multisensory and tactile work with
              her younger clientele.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Additional Credentials
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p>
            In addition to her state licenses, Erin is a National Certified
            Counselor (NCC). The NCC is the premier certification for the
            counseling profession. Holding the NCC demonstrates to colleagues
            and the public that you have voluntarily met high national standards
            for the practice of counseling.
          </p>
          <p>
            Erin is also a member of the ACA (The American Counseling
            Association).
          </p>
        </div>
      </section>

      <footer className="flex justify-center items-center h-16 text-white space-x-8">
        <a
          href="mailto:Welshwellnessandcounseling@gmail.com"
          className="hover:underline"
        >
          Email Me
        </a>
        <a href="tel:4433537479" className="hover:underline">
          Call Me (443) 353-7479
        </a>
        <a
          href="https://www.facebook.com/welshwellnessandcounseling"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Facebook
        </a>
      </footer>
    </main>
  );
}
