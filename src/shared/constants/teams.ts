import ImgDatLe from '@/assets/images/teams/DatLe.webp'
import ImgDuongCao from '@/assets/images/teams/DuongCao.webp'
import ImgHieuNguyen from '@/assets/images/teams/HieuNguyen.webp'
import ImgMinhNguyen from '@/assets/images/teams/MinhNguyen.webp'
import ImgPhongPham from '@/assets/images/teams/PhongPham.webp'

export const TEAMS = [
    {
        name: 'Phong Pham',
        position: 'Founder, Lead Engineer',
        avatar: ImgPhongPham,
    },
    { name: 'Dat Le', position: 'Mechanical Engineer', avatar: ImgDatLe },
    {
        name: 'Minh Nguyen',
        position: 'Mechanical Engineer',
        avatar: ImgMinhNguyen,
    },
    {
        name: 'Hieu Nguyen',
        position: 'Mechanical Engineer',
        avatar: ImgHieuNguyen,
    },
    { name: 'Duong Cao', position: 'IT Developer', avatar: ImgDuongCao },
]

export type Member = (typeof TEAMS)[0]
