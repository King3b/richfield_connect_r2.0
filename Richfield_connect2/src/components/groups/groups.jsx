import "../groups/groups.css";

function GroupsLink(props) {
  return (
    <div className="group">
      <h4>
        <a href="{props.link}"> {props.groupName} </a>
      </h4>
      <button className="join-group-btn">Join</button>
      <p>{props.desc}</p>
    </div>
  );
}
export default GroupsLink;
