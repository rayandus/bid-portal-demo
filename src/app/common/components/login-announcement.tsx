import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Alert, Collapse, Link } from '@mui/material';

const LoginAnnouncement = () => {
  const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

  const handleExpandInfo = useCallback(() => {
    setIsInfoExpanded((prevState) => !prevState);
  }, []);

  return (
    <AlertStyled severity="warning">
      <div>
        This demo app is being hosted in Azure App Service with a Free Tier plan. You may
        experience slow login on initial attempt to access.
      </div>
      <Collapse in={isInfoExpanded}>
        <p>
          A brief explanation to this is that this app gets deallocated from a shared VM
          when idle or not used for more than 20min. When there is a request, the app will
          be queued for reallocation in an available shared VM. This is an intended
          phenomenon called <b>cold start</b>. <i>You get what you pay for</i>.
        </p>
        <p>
          The time to successfully load and run the app in the server depends and Azure
          App Service does not guarantee an SLA for the free tier plan.
        </p>
        <p>
          Once you are in, you no longer have to go through the frustrating cold start.
        </p>
        <p>Sorry, that&apos;s all I can afford :)</p>
      </Collapse>
      <KnowMoreLink href="#" underline="always" onClick={handleExpandInfo}>
        {isInfoExpanded ? 'Show less' : 'Click here to know more'}
      </KnowMoreLink>
      {/* <Link to="https://learn.microsoft.com/en-us/answers/questions/760418/webapp-first-time-loads-very-slowly-like-dns-resol">
        Here's the explanation
      </Link> */}
    </AlertStyled>
  );
};

const AlertStyled = styled(Alert)`
  margin-bottom: 15px;
`;

const KnowMoreLink = styled(Link)`
  display: flex;
  margin-top: 10px !important;
  width: fit-content;
`;

export default LoginAnnouncement;
