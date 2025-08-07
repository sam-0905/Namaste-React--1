import "./support.css";

 function Support() {
        const chef = new URL("../assets/chef.png", import.meta.url).href;
        const farm = new URL("../assets/farm.jpg", import.meta.url).href;
        const community = new URL("../assets/community.jpg", import.meta.url).href;
        const localChef = new URL("../assets/localChef.jpg", import.meta.url).href;
        const organicFarmer = new URL("../assets/organicFarmer.jpg", import.meta.url).href;
        const deliveryPic = new URL("../assets/deliveryPic.jpg", import.meta.url).href;

  return (
    <>
      {/* Support Reasons */}
      <section className="support-reasons">
        <h1>How Your Support Helps</h1>
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
         <img  className="support-pic" src={deliveryPic} alt="" />

      </section>

      {/* Testimonials */}
      <section className="support-testimonials">
        <h1>What Our Supporters Say</h1>
        <div className="testimonial-grid">
          <div className="testimonial">
            <img src={localChef} alt="local Chef" />
            <h4>Sarah K.</h4>
            <p className="role">Local Chef</p>
            <p>
              "The support helped us keep our doors open during tough times."
            </p>
          </div>

          <div className="testimonial">
            <img src={organicFarmer} alt="organic Farmer" />
            <h4>Michael T.</h4>
            <p className="role">Organic Farmer</p>
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