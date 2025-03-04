import { styled } from "styled-components";
import { BLOG_TITLE } from "~public/constants";
import LogoWhite from "~public/icon/logo_bg_white.svg";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileImage = styled(LogoWhite)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.1);
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage />
      <div>
        <p>{BLOG_TITLE}</p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
