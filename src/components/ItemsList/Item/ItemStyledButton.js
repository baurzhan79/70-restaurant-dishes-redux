import styled from "styled-components";

const StyledButton = styled.button`
                    &:before {
                                content: url(${props => props.iconBefore});
                                width: 20px;
                                height: 20px;
                                margin-right: 10px;
                                display: inline-flex;
                                align-items: center;
                            }
                    `;

export default StyledButton;