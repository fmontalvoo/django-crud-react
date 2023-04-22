export function TaskItem({ task }) {
  return (
    <li>
      <div>
        <dl>
          <dt>
            <h3>{task.title}</h3>
          </dt>
          <dd>
            <p>{task.description}</p>
          </dd>
        </dl>
      </div>
    </li>
  );
}
