import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes }, }) {
    return ( <div className={css.container}>
        <div className={css.wrapper} >
            <img className={css.user}
                src={image}
                alt="User avatar" width='200'
            />
            <p className={css.name}>{name}</p>
            <p className={css.info}>@{tag}</p>
            <p className={css.info}>{location}</p>
        </div>

        <ul className={css.list}>
            <li className={css.item}>
                <span>Followers</span>
                <span className={css.likes}>{followers}</span>
            </li>
            <li className={css.item}>
                <span>Views</span>
                <span className={css.likes}>{views}</span>
            </li>
            <li className={css.item}>
                <span>Likes</span>
                <span className={css.likes}>{likes}</span>
            </li>
        </ul>
    </div>);
}