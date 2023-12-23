import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
const Notice = (props) => {
  return (
    <>
      <Alert
        status={props.noticeIcon}
        className={`p-4 py-3 flex align-middle justify-center ${props.className}`}
      >
        <AlertIcon className={`text-white w-4 h-4 mr-2 ${props.noticeIcon}`} />
        <AlertTitle
          className={`pt-1 text-[12.5px] font-medium text-black mr-1.5  ${props.noticeTitleStyle}`}
        >
          <p className="font-helvetica-neue">{props.noticeTitle}</p>
        </AlertTitle>
        <AlertDescription
          className={`pt-1 text-[12.5px] font-medium text-black font-helvetica-neue ${props.noticeDescriptionStyle}`}
        >
          <Link
            className={`underline hover:text-gray-500 hover:no-underline ${props.noticeLinkStyle}`}
            href={props.noticeLink}
            isExternal
          >
            <p className="font-helvetica-neue">{props.noticeDescription}</p>
          </Link>
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Notice;
