import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
const Notice = ({status = 'info', noticeTitle, noticeLinkText = '', link = '#', noticeBodyClass, noticeTextClass}) => {
  return (
    <>
      <Alert
        status={status}
        className={`p-4 py-3 flex align-middle justify-center ${noticeBodyClass}`}
      >
        <AlertIcon className={`text-white w-4 h-4 mr-2 ${status} ${noticeTextClass}`} />
        <AlertTitle
          className={`pt-1 text-[12.5px] font-medium text-black mr-1.5`}
        >
          <p className={`font-helvetica-neue ${noticeTextClass}`}>{noticeTitle}</p>
        </AlertTitle>
        <AlertDescription
          className={`pt-1 text-[12.5px] font-medium text-black font-helvetica-neue ${noticeTextClass}`}
        >
          <Link
            className={`underline hover:text-gray-500 hover:no-underline`}
            href={link}
            isExternal
          >
            <p className="font-helvetica-neue">{noticeLinkText}</p>
          </Link>
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Notice;
