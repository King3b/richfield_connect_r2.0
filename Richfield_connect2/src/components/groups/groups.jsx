import "../groups/groups.css";

function GroupsLink(props) {
  return (
    <div className="group">
      <h4 className="group-name">
        <a href={props.link}>{props.groupName}</a>
      </h4>

      <p className="group-description">{props.desc}</p>

      <button type="button" className="join-group-btn">
        Join
      </button>
    </div>
  );
}

export default GroupsLink;
