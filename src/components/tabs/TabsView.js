import React from "react";
import Tabs from "./Tabs";
import Panel from "./Panel";

import { allChats } from "./data";

import "./tabs.css";

// const myInfluencers = [33, 81];

const userId = 4;

export default function TabsView() {
  return (
    <>
      <Tabs>
        <Panel title="All ">
          {allChats
            .filter((event) => event.host_id !== userId)
            .map((event) => {
              return <div key={event.id}>{event.title}</div>;
            })}
        </Panel>
        <Panel title="Open ">
          {allChats
            .filter((event) => event.host_id !== userId)
            .map((event) => {
              return <div key={event.id}>{event.title}</div>;
            })}
        </Panel>
        <Panel title="Resolved ">
          {allChats.map((event) => {
            return <div key={event.id}>{event.title}</div>;
          })}
        </Panel>
      </Tabs>
    </>
  );
}
