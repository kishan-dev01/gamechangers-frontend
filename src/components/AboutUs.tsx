import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyPanels = [
  {
    title: "THE VISION",
    text: "Amandeep Singh is redefining global sports ecosystems by building scalable, high-value platforms across sport, entertainment, and culture.",
    accent: "#FFD700",
    number: "01",
  },
  {
    title: "THE BUILDER",
    text: "Founder of Game Changers FZCO, he has rapidly created one of the fastest-growing sports ecosystems since 2024.",
    accent: "#FF4D4D",
    number: "02",
  },
  {
    title: "THE EXECUTION",
    text: "From championship-winning teams to multi-sport IPs, his execution-driven mindset sets him apart on the global stage.",
    accent: "#00CFFF",
    number: "03",
  },
  {
    title: "BEYOND SPORTS",
    text: "With ventures in music, entertainment, hospitality, and film, he operates at the intersection of culture and commerce.",
    accent: "#A8FF78",
    number: "04",
  },
];

const stats = [
  { value: "2024", label: "Founded" },
  { value: "10+", label: "Active Ventures" },
  { value: "5+", label: "Global Markets" },
  { value: "∞", label: "Ambition" },
];

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance ──
      gsap.fromTo(
        ".hero-title",
        { y: 60, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.4, ease: "power4.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.7 }
      );
      gsap.fromTo(
        ".hero-line",
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 1.1 }
      );

      // ── Horizontal scroll ──
      const el = horizontalRef.current;
      if (!el) return;

      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      // The main horizontal tween — store reference for containerAnimation
      const horizontalTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.3, max: 0.6 },
            ease: "power2.inOut",
          },
          end: () => "+=" + (el.scrollWidth - window.innerWidth),
        },
      });

      // ── Panel content reveals — tied to horizontal scroll ──
      panels.forEach((panel) => {
        const title = panel.querySelector(".panel-title");
        const text = panel.querySelector(".panel-text");
        const accent = panel.querySelector(".panel-accent-line");
        const num = panel.querySelector(".panel-number");

        if (title) {
          gsap.fromTo(
            title,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (text) {
          gsap.fromTo(
            text,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (accent) {
          gsap.fromTo(
            accent,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (num) {
          gsap.fromTo(
            num,
            { opacity: 0, x: 60 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // ── Final section reveals ──
      if (finalRef.current) {
        gsap.fromTo(
          ".final-title",
          { y: 60, opacity: 0, skewY: 2 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: finalRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".final-sub",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: finalRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── Stats counter reveal ──
      if (statsRef.current) {
        gsap.fromTo(
          ".stat-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white" style={{ fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif" }}>

      {/* ── GOOGLE FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');

        .panel-accent-line {
          transform-origin: left center;
        }

        .hero-line {
          transform-origin: top center;
        }

        /* Noise grain overlay */
        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        /* Horizontal scroll cursor hint */
        .panel:not(:first-child) {
          border-left: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO VIDEO
      ═══════════════════════════════════════ */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden grain">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ willChange: "transform" }}
        >
          <source src="/videos/founder.mp4" type="video/mp4" />
        </video>

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Corner decorative mark */}
        <div className="absolute top-8 left-8 flex items-center gap-3 opacity-60">
          <div style={{ width: 32, height: 2, background: "#FFD700" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
            GAME CHANGERS FZCO
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          {/* Eyebrow */}
          <p className="hero-sub mb-4" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            letterSpacing: "0.5em",
            color: "#FFD700",
            fontWeight: 500,
            textTransform: "uppercase",
            opacity: 0,
          }}>
            Founder · Visionary · Builder
          </p>

          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 900,
              fontStyle: "italic",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.92,
              opacity: 0,
            }}
          >
            AMANDEEP<br />
            <span style={{ color: "#FFD700", WebkitTextStroke: "1px #FFD700" }}>SINGH</span>
          </h1>

          <p className="hero-sub mt-8" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
            maxWidth: 520,
            color: "rgba(255,255,255,0.55)",
            fontWeight: 300,
            lineHeight: 1.7,
            opacity: 0,
          }}>
            Building the future of global sports,<br />entertainment, and culture.
          </p>

          <div
            className="hero-line mt-10"
            style={{ height: 80, width: 1, background: "linear-gradient(to bottom, rgba(255,215,0,0.6), transparent)", opacity: 0 }}
          />

          {/* Scroll hint */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.25)",
            marginTop: 12,
            textTransform: "uppercase",
          }}>
            Scroll to explore
          </p>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          HORIZONTAL STORY PANELS
      ═══════════════════════════════════════ */}
      <div ref={containerRef} className="relative overflow-hidden" style={{ height: "100vh" }}>
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: `${storyPanels.length * 100}vw`, willChange: "transform" }}
        >
          {storyPanels.map((sec, i) => (
            <div
              key={i}
              className="panel relative flex items-center justify-center"
              style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            >
              {/* Subtle diagonal background rule */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: i % 2 === 0
                  ? "linear-gradient(135deg, rgba(255,255,255,0.015) 0%, transparent 50%)"
                  : "linear-gradient(225deg, rgba(255,255,255,0.015) 0%, transparent 50%)",
                pointerEvents: "none",
              }} />

              {/* Vertical rule accent */}
              <div style={{
                position: "absolute",
                left: "clamp(2rem, 6vw, 5rem)",
                top: "50%",
                transform: "translateY(-50%)",
                width: 1,
                height: "30vh",
                background: `linear-gradient(to bottom, transparent, ${sec.accent}, transparent)`,
                opacity: 0.5,
              }} />

              <div style={{ maxWidth: 700, padding: "0 clamp(4rem, 10vw, 8rem)" }}>

                {/* Accent line above title */}
                <div
                  className="panel-accent-line"
                  style={{
                    height: 3,
                    width: 60,
                    background: sec.accent,
                    marginBottom: 28,
                    transformOrigin: "left center",
                  }}
                />

                <h2
                  className="panel-title"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    textTransform: "uppercase",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                    marginBottom: 32,
                    color: "rgba(255,255,255,0.95)",
                    opacity: 0,
                  }}
                >
                  {sec.title}
                </h2>

                <p
                  className="panel-text"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    maxWidth: 480,
                    opacity: 0,
                  }}
                >
                  {sec.text}
                </p>

              </div>

              {/* Big background number */}
              <div
                className="panel-number"
                style={{
                  position: "absolute",
                  right: "clamp(1rem, 4vw, 3rem)",
                  bottom: "clamp(1rem, 4vh, 2.5rem)",
                  fontSize: "clamp(8rem, 20vw, 18rem)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "transparent",
                  WebkitTextStroke: `1px ${sec.accent}18`,
                  lineHeight: 1,
                  userSelect: "none",
                  opacity: 0,
                }}
              >
                {sec.number}
              </div>

            </div>
          ))}
        </div>

        {/* Panel progress dots */}
        <div style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}>
          {storyPanels.map((sec, i) => (
            <div key={i} style={{
              width: i === 0 ? 24 : 6,
              height: 6,
              borderRadius: 3,
              background: i === 0 ? sec.accent : "rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════ */}
      <div
        ref={statsRef}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: 900,
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        {stats.map((s, i) => (
          <div key={i} className="stat-item" style={{ textAlign: "center", opacity: 0 }}>
            <div style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#FFD700",
              lineHeight: 1,
              marginBottom: 8,
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════
          FINAL IMPACT SECTION
      ═══════════════════════════════════════ */}
      <div ref={finalRef} className="relative py-40 px-6 text-center" style={{ overflow: "hidden" }}>

        {/* Background decorative text */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(6rem, 20vw, 18rem)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}>
          EMPIRE
        </div>

        <p className="final-sub" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.5em",
          color: "#FFD700",
          textTransform: "uppercase",
          marginBottom: 24,
          opacity: 0,
          fontWeight: 500,
        }}>
          The Mission
        </p>

        <h2
          className="final-title"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            textTransform: "uppercase",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            opacity: 0,
          }}
        >
          A GLOBAL{" "}
          <span style={{
            color: "#FFD700",
            display: "inline-block",
          }}>
            VISION
          </span>
        </h2>

        <div style={{
          width: 1,
          height: 60,
          background: "linear-gradient(to bottom, rgba(255,215,0,0.5), transparent)",
          margin: "2rem auto",
        }} />

        <p className="final-sub" style={{
          fontFamily: "'Inter', sans-serif",
          maxWidth: 560,
          margin: "0 auto",
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.8,
          fontWeight: 300,
          opacity: 0,
        }}>
          From sports IPs to entertainment ventures, Amandeep Singh is shaping a
          multi-industry empire driven by innovation, execution, and global ambition.
        </p>

        {/* Bottom rule */}
        <div style={{
          marginTop: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
          <div style={{ height: 1, width: 80, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFD700", opacity: 0.6 }} />
          <div style={{ height: 1, width: 80, background: "rgba(255,255,255,0.1)" }} />
        </div>

      </div>

    </section>
  );
}