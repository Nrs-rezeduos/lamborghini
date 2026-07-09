import "./CompanyProfile.css";
import profileImage from "../../assets/company/profile.jpg";

export default function CompanyProfile() {
  return (
    <section className="company-profile">

      <div className="profile-left">

        <h2>COMPANY PROFILE</h2>

        <p>
          Founded in 1963 by Ferruccio Lamborghini and headquartered in
          Sant'Agata Bolognese, Italy, Automobili Lamborghini is synonymous
          with design excellence and super sports car performance, with iconic
          models such as Revuelto, Urus SE and Temerario.
        </p>

        <p>
          For more than sixty years Lamborghini has combined technological
          innovation with bold design, creating automobiles that have become
          icons around the world.
        </p>

        <button className="discover-btn">
          <span>DISCOVER MORE</span>
          <span className="plus">+</span>
        </button>

      </div>

      <div className="profile-right">
        <img src={profileImage} alt="Company Profile" />
      </div>

    </section>
  );
}