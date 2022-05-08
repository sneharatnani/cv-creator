export default function Preview(props) {
  const {
    name,
    email,
    phone,
    uniName,
    degree,
    stdStart,
    stdEnd,
    company,
    position,
    jobStart,
    jobEnd,
    desc,
  } = props;
  return (
    <div className="preview">
      <h2>Personal Information</h2>

      <h3>name</h3>
      <p>{name}</p>

      <h3>email</h3>
      <p>{email}</p>

      <h3>phone</h3>
      <p>{phone}</p>

      <h2>Education</h2>
      <h3>university Name</h3>
      <p>{uniName}</p>

      <h3>degree</h3>
      <p>{degree}</p>

      <h3>from</h3>
      <p>{stdStart}</p>

      <h3>to</h3>
      <p>{stdEnd}</p>

      <h2>job Experience</h2>
      <h3>company</h3>
      <p>{company}</p>

      <h3>position</h3>
      <p>{position}</p>

      <h3>from</h3>
      <p>{jobStart}</p>

      <h3>to</h3>
      <p>{jobEnd}</p>

      <h3>job description</h3>
      <p>{desc}</p>
    </div>
  );
}
