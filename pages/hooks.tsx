import { ReadAndWriteState, GroupState, DefaultState } from "../code/hooks";

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
    </>
  );
}
