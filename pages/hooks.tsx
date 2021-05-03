import {
  ReadAndWriteState,
  GroupState,
  DefaultState,
  CDMLifeCycle,
  CDULifeCycle,
  CWUMLifeCycle,
  DynamicPropsLifeCycle,
  CustomHook,
  MemoExample,
  Parent as ContextParentExample,
  ReducerComponent
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
      <hr />
      <h3>lifecycle: componentWillUnMount()</h3>
      <CWUMLifeCycle />
      <hr />
      <h3>lifecycle: Dynamic props updates()</h3>
      <DynamicPropsLifeCycle />
      <hr />
      <h3>CustomHook</h3>
      <CustomHook />
      <hr />
      <h3>Memo Example</h3>
      <MemoExample />
      <hr />
      <h3>Context Parent Example</h3>
      <ContextParentExample />
      <hr />
      <h3>Reducers</h3>
      <ReducerComponent />
    </>
  );
}
