import { Brain, Code2, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold">
              Exploring Algorithms, AI & Software Development
            </h3>

            <p className="text-muted-foreground">
              I spend most of my time improving my problem-solving skills
              through Data Structures, Algorithms, and Competitive Programming.
              I enjoy tackling challenging problems and learning efficient ways
              to approach them.
            </p>

            <p className="text-muted-foreground">
              Alongside problem solving, I’m deeply interested in Machine
              Learning and Deep Learning. I’ve worked on projects invloving 
              neural networks, CNN-based models,while also
              exploring emerging areas like NeuroSymbolic AI.
            </p>

            <p className="text-muted-foreground">
              I also enjoy building clean and interactive web interfaces with
              React and Tailwind CSS to bring ideas and projects to life.
            </p> 
            <p className="text-muted-foreground"> 
              Currently, I’m looking for internship opportunities to grow as a
              developer and gain real-world experience.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">

            {/* DSA & CP */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    DSA & Competitive Programming
                  </h4>

                  <p className="text-muted-foreground">
                    Building strong logical thinking and coding efficiency
                    through algorithms, contests, and problem-solving practice.
                  </p>
                </div>

              </div>
            </div>

            {/* MACHINE LEARNING */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & Deep Learning
                  </h4>

                  <p className="text-muted-foreground">
                     Working with deep learning, CNNs, and intelligent systems
                     while exploring modern AI architectures and learning models.
                  </p>
                </div>

              </div>
            </div>

            {/* WEB DEVELOPMENT */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Development
                  </h4>

                  <p className="text-muted-foreground">
                    Building clean and responsive interfaces while learning
                    modern frontend development and UI design principles.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};