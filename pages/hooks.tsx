import {
  ReadAndWriteState,
  GroupState,
  DefaultState,
  CDMLifeCycle,
  CDULifeCycle
} from "../code/hooks";

export default function Hooks() {
  return (
    <>
      <h3>state: read & write</h3>
      <ReadAndWriteState />
      <hr />
      <h3>state: group</h3>
      <GroupState />
      <hr />
      <h3>state: default values</h3>
      <DefaultState />
      <hr />
      <h3>lifecycle: componentDidMount()</h3>
      <CDMLifeCycle />
      <hr />
      <h3>lifecycle: componentDidUpdate()</h3>
      <CDULifeCycle />
    </>
  );
}
