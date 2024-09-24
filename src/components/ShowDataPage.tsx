'use client';
import React, { useState } from 'react';
import ShowListMenu from '@/components/ShowListMenu';
import { ExerciseDataType } from '../app/page';

import { BodyPartListType, SearchParamsType } from '@/app/page';
export type ShowDataPagePropType = {
  data: BodyPartListType[];
  selectedKeyList: SearchParamsType['searchParams']['genre'];
};

function ShowDataResults({ data, selectedKeyList }: ShowDataPagePropType) {
  return (
    <>
      <ShowListMenu
        list={data}
        selectedKeyList={selectedKeyList}
        setSelectedListItem={setSelectedListItem}
      />
    </>
  );
}

export default ShowDataResults;
