import IPost from "@/store/models/IPost";

const postData: IPost[] = [
    {
        id: "1",
        displayName: "NASA",
        userName: "@NASA",
        verified: true,
        avatar: "",
        postTime: "Aug 29",
        fileUrl: "https://pbs.twimg.com/media/F4u0b2kWQAAbMYI?format=webp&name=small",
        text: "Hurry! There are only two days left to apply to be one of our @NASAinterns this spring. Sign up to be part of the next generation of explorers, designers, coders, and communicators. Applications are due Aug. 31: http://intern.nasa.gov",
    },
    {
        id: "2",
        displayName: "Eva McMillan",
        userName: "@EvasTeslaSPlaid",
        verified: true,
        avatar: "",
        postTime: "Aug 25",
        fileUrl: "https://pbs.twimg.com/media/F4uH7fFWYAEWLhQ?format=webp&name=small",
        text: "Everyone please say thank you to @elonmusk for all of his hard work and all the good things he does for humanity and a better life for all of us",
    },
]

export default postData
