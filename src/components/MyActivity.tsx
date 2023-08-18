import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

interface Props {
  foo: boolean;
}

const MyActivity = () => {
  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>My Activity</div>
    </AppScreen>
  );
};

export default MyActivity;
