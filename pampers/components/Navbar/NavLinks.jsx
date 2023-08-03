import Link from "next/link";
import { links } from "./MyLinks";
import React from "react";

const NavLinks = () => {
    return (
      <>
        {links.map((link) => (
            <div className="group">
              <div
                className="menu_item">
                <Link href={link.href}>
                {link.name}
                </Link>
              </div>
              {link && (
                  <div className="panel-container">
                    <div  className="panel group">
                     
                    <div className="bigHead">{link.header.split("\n").map((line,index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br/>
                      </React.Fragment>
                    ))}</div>
                    <div className="panel-items">
                      {link.sublinks.map((mysublinks) => (
                        <div className="pr-10">
                        <h1 className="font-semibold pb-5">
                        {mysublinks.Head.split("\n").map((line,index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br/>
                      </React.Fragment>
                    ))}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li className="list-none pb-4 font-medium">
                              <Link
                                href={slink.link}
                                className="panel-item"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
              )}
            </div>
        ))}
      </>
    );
  };
  
  export default NavLinks;