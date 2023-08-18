import commonServerSideProps from "@lib/server/commonServerSideProps";
import { Stack } from "@lib/utils/stackflowInit";
import "@stackflow/plugin-basic-ui/index.css";

const PasswordReset = () => {
  return (
    <div>
      <Stack />
    </div>
  );
};

export const getStaticProps = commonServerSideProps();

export default PasswordReset;
