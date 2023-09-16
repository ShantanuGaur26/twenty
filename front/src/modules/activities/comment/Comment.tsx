import styled from '@emotion/styled';

import { CommentForDrawer } from '../types/CommentForDrawer';

import { CommentHeader } from './CommentHeader';

type OwnProps = {
  comment: CommentForDrawer;
  actionBar?: React.ReactNode;
};

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: flex-start;
  width: 100%;
`;

const StyledCommentBody = styled.div`
  color: ${({ theme }) => theme.font.color.secondary};
  font-size: ${({ theme }) => theme.font.size.md};

  line-height: ${({ theme }) => theme.text.lineHeight.md};
  overflow-wrap: anywhere;

  padding-left: 24px;

  text-align: left;
`;

export const Comment = ({ comment, actionBar }: OwnProps) => (
  <StyledContainer>
    <CommentHeader comment={comment} actionBar={actionBar} />
    <StyledCommentBody>{comment.body}</StyledCommentBody>
  </StyledContainer>
);
