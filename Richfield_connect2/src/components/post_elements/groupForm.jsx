function GroupsForm() {
  return (
    <div class="group">
      <a href={props.link}>
        <h4>{props.name}</h4>
        <button class="join-group-btn">Join</button>
      </a>
      <p>{props.info}</p>
    </div>
  );
}

export default GroupsForm;
