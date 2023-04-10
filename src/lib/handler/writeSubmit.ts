// import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
// import { ImgCreateResponse } from "@lib/API/petBookAPI/types/imgRequest";

// export const imgSubmit = () => {};

// export default defaultSubmit;

// setLoading(true);
// setWrite((write) => {
//   if (
//     typeof write.inputFile !== "undefined" &&
//     Array.isArray(write.inputFile)
//   ) {
//     const imgPromise = async () => {
//       const mutateState = await imgMutation.mutateAsync({
//         header: multipartHeader,
//         body: {
//           fileList: write.inputFile as File[],
//         },
//       });

//       return mutateState.data;
//     };

//     const withImgSubmitRun = () => {
//       imgPromise()
//         .then((imgRes) => {
//           defaultSubmit(imgRes);
//         })
//         .catch((err) => localConsole?.error(err));
//     };

//     if (write.inputImg) {
//       withImgSubmitRun();
//     }
//   }

//   const articlePromise = async (imgRes?: ImgCreateResponse) => {
//     if (imgRes) {
//       const imageIds = imgRes.map((res) => {
//         return res.id;
//       });

//       const mutateState = await articleMutation.mutateAsync({
//         body: {
//           title: write.inputTitle,
//           content: write.inputContent,
//           categoryId: write.selectedCategory.idx + 1,
//           tags: write.inputHash,
//           imageIds,
//         },
//       });

//       return mutateState.data as ArticleResponse;
//     }
//   };

//   const defaultSubmit = (imgRes?: ImgCreateResponse) => {
//     setLoading(false);

//     articlePromise(imgRes)
//       .then((articleRes) => {
//         if (articleRes) {
//           navigator({
//             url: `/community/list/${articleRes.id}`,
//           });
//         }
//       })
//       .catch((err) => localConsole?.error(err));
//   };

//   if (!write.inputImg || write.inputImg.length === 0) {
//     defaultSubmit();
//   }

//   return {
//     ...write,
//   };
// });

const dtner = "";

export default dtner;
