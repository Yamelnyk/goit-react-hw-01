import clsx from "clsx";
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (<div>
  <img src={avatar} alt="Avatar" width="80" />
  <p className={css.name}>{name}</p>
        <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"} </p>
</div>
)
}