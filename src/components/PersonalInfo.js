export default function GeneralInfo(props) {
  const { handleInput, name, email, phone } = props;

  return (
    <section>
      <h2 className="form-heading">Personal Information</h2>

      {/* name */}
      <div className="container">
        <label htmlFor="name">full name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Sara Robinson"
          value={name}
          onChange={handleInput}
        />
      </div>

      {/* email */}
      <div className="container">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={handleInput}
        />
      </div>

      {/* phone */}
      <div className="container">
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1234567890"
          value={phone}
          onChange={handleInput}
        />
      </div>
    </section>
  );
}
