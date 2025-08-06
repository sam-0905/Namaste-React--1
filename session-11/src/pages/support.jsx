import "./support.css";

 function Support() {
        const chef = new URL("../assets/chef.png", import.meta.url).href;
        const farm = new URL("../assets/farm.jpg", import.meta.url).href;
        const community = new URL("../assets/community.jpg", import.meta.url).href;

  return (
    <>
      {/* Support Reasons */}
      <section className="support-reasons">
        <h2>How Your Support Helps</h2>
        <p className="support-reasons-subtitle">
          Every contribution makes a difference in connecting food lovers with
          quality local producers.
        </p>

        <div className="support-card-grid">
          <div className="support-card">
            <img src={chef} alt="Support Local Chefs" />
            <h3>Support Local Chefs</h3>
            <p>
              Help independent chefs share their culinary creations with more
              food lovers.
            </p>
          </div>

          <div className="support-card">
            <img src={farm} alt="Fresh from Farm" />
            <h3>Fresh from Farm</h3>
            <p>
              Your support helps farmers bring fresh, organic produce directly
              to you.
            </p>
          </div>

          <div className="support-card">
            <img src={community} alt="Community Meals" />
            <h3>Community Meals</h3>
            <p>
              Fund meals for families in need via our food bank partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="support-cta">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our movement and help sustain local food ecosystems.</p>
        <div className="support-buttons">
          <button className="btn-primary">Donate Now</button>
          <button className="btn-outline">Become a Partner</button>
          <button className="btn-outline">Shop & Support</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="support-testimonials">
        <h2>What Our Supporters Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <img src="/images/supporter1.jpg" alt="Sarah K" />
            <h4>Sarah K.</h4>
            <p className="role">Restaurant Owner</p>
            <p>
              "The support helped us keep our doors open during tough times."
            </p>
          </div>

          <div className="testimonial">
            <img src="/images/supporter2.jpg" alt="Michael T" />
            <h4>Michael T.</h4>
            <p className="role">Farmer</p>
            <p>
              "Selling here connected me to customers who value organic
              farming."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;