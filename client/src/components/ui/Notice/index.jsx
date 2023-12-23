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
      <Alert status="info" className={props.noticeBackground}>
        <AlertIcon className={props.noticeIcon} />
        <AlertTitle className={props.noticeTitleStyle}>
          {props.noticeTitle}
        </AlertTitle>
        <AlertDescription className={props.noticeDescriptionStyle}>
          <Link
            className={props.noticeLinkStyle}
            href={props.noticeLink}
            isExternal
          >
            {props.noticeDescription}
          </Link>
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Notice;
