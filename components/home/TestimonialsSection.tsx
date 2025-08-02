export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ananya",
      text: "Sarathi feels like a friend who truly understands my struggles. The wisdom it shares is calming and timeless."
    },
    {
      name: "Rahul",
      text: "Every time I use Ask Krishna, I feel more at peace. It’s like Krishna himself is guiding me."
    },
    {
      name: "Meera",
      text: "The daily shlokas help me start my day with a clear and positive mind. Truly beautiful."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#e9e5da] to-[#f7f5f0] dark:from-[#1a1a1a] dark:to-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Voices of Our Users</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/20 dark:bg-black/20 rounded-2xl p-6 shadow-lg border border-white/30 
                         hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300"
            >
              <p className="text-sm mb-4 italic opacity-80">"{testimonial.text}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
