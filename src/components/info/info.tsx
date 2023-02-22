import { ConditionalRenderer } from "@components/conditional-renderer";
import { ExternalLink } from "@components/external-link";
import { Gfm } from "@components/gfm";
import { Span } from "@components/span";
import { openApiContext } from "@context";
import { useContext } from "react";

type InfoProps = {
    className?: string;
}

export const Info = ({ className }: InfoProps) => {
    const { apiData: { Description, Title, Contact, License, TermsOfService }, state } = useContext(openApiContext);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={`flex flex-col items-center gap-8 ${className}`}>
                <Span variant={"title"} className={"text-white max-w-screen-xl"}>{Title}</Span>
                {Description && (
                    <>
                        <Span variant={"body-large"} className={"text-white"}>
                            <Gfm data={Description}/>
                        </Span>
                    </>
                )}
                {(Contact || License || TermsOfService) && (
                    <div className={"flex flex-col md:flex-row gap-4 justify-evenly w-full"}>
                        {Contact && (
                            <div className={"flex flex-col gap-2"}>
                                <Span variant={"body-large"}>Contact</Span>

                                {Contact.name && <Span variant={"body-small"}>{Contact.name}</Span>}

                                {Contact.email && (
                                    <Span variant={"body-small"}>
                                        <ExternalLink href={Contact.email} variant={"mail"}>
                                            {Contact.email}
                                        </ExternalLink>
                                    </Span>
                                )}

                                {Contact.url && (
                                    <Span variant={"body-small"}>
                                        <ExternalLink href={Contact.url}>
                                            {Contact.url}
                                        </ExternalLink>
                                    </Span>
                                )}

                            </div>
                        )}

                        {License && (
                            <div className={"flex flex-col gap-2"}>
                                <Span variant={"body-large"}>License:</Span>
                                <Span variant={"body-small"}>
                                    {
                                        License.url
                                            ? <ExternalLink href={License.url}>{License.name ?? License.url}</ExternalLink>
                                            : License.name
                                    }
                                </Span>
                            </div>
                        )}

                        {TermsOfService && (
                            <div className={"flex flex-col gap-2"}>
                                <Span variant={"body-large"}>Terms Of Service:</Span>
                                <Span variant={"body-small"}>
                                    {TermsOfService}
                                </Span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </ConditionalRenderer>
    );
};

Info.defaultProps = { className: "" };
