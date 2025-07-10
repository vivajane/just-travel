"use client";
import React, { use, useContext } from 'react'
// import { activities } from '../../../../data/activities'
import DetailActivity from '@/app/components/DetailActivity'
import { ContextActivity } from '@/app/components/Context'

const PageSlug = ({params}) => {
    const {slug} = use(params)
    const {activities} = useContext(ContextActivity)
    const activity = activities.find((e) => e.slug === slug )
    return (
        <div>
            {activity ? <DetailActivity activity={activity} /> : <p>Activity not found</p>}
        </div>
    )
    

}

export default PageSlug
