const countries = [
  "Austria",
  "Belgium",
  "Czechia",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Italy",
  "Lebanon",
  "Portugal",
  "Spain",
  "Switzerland"
];

export default function CountryList() {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div className="country" key={country}>
          <span>{country.toUpperCase()}</span>
          <button>+</button>
        </div>
      ))}
    </div>
  );
}