/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 300,
    "height": 300,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 150,
    "height": 150,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAklEQVR4AewaftIAABWnSURBVO3BCXiU9YHA4d/3zTd3JpPJfRACgYSEhCMJh1ylHIoCgheexVVbbLXVWrfWtqxi7XpUC1rdZ7daj4pdK3iUqnggiuDBTSABcpCEQO5kck5mMplM5luSbdgYJwnouvtk5v++CIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgDE2DcD7iEqIsrztcnisBH3AcwS8JYTBxwBpgKrAVKB8/yvb4muWTsxSNhmq7g2p7e+3W3aX721yep4DtCGdJCAOtSoiy3Lo4J2lWQqTFHGLSsv1AOUkxVsaPsmGzGOivo9NLSVUz2w+W7z1R0bweeA0BCaFPztg46/qLZybPTxsdjlbR0Kej04tOq0EjSwymy9tNwalG79tflH5U1eC4HSgjiEkIPR686rsT7pyVkWA16hWG0+1T0cgS/jhcnXx+tKr+rc9KHgGeJEhpCHJ6real2y/PvnNGepxBq8gMx+Xu4v29ZYSa9FhMOgbSaxXGJ9jM8ZEhi4+X26O93ep7BCENQSwqzPTGnVflXJscH8a50ioa0kZHUF7bSnlNK6OiLPgTFxEijx8VPiO3uDba262+S5DREKQMOs0ffrQy66bE6FC+jhibGVmC3BP1JMVa8SfcYmD8qPDpucW14d5u9X2CiIbgdOuNSzIfmDgmUuYbsJj0qEBNo5OoMBP+hFsMRIQac3JP1NcChwgSMsHHtnjamF9npcYqnIPaJidDGRNrpaHFRauzk8FkpcYqy2aNWwvYCBIyQUav1fxh/pTEJI0scS7Ka1oYzvS0OA4U1jIYjSwxKyM+Sa/TrCdIyASX5Mvnpa6IsBo5V58cPs1wjHqFqDAjzQ43gwkPNXLFvNTLABtBQCaI6LWa304aF2XlPMTExFNZ72A44xNsnKxpYSgpieE2YB1BQCaILJkxdr7NYuB8rFm1lOpGJ8MxGbTUt7gYSmy4mWkTYucQBGSCx/dSE8MTOE8mo56EpAy6fSqDaXa4aXa4iQw10dDiYijZE2IzARsBTiZIhJp01ydGW/g6LsiaSH5pPaXVLRwta+CTvDpyK6DBG0tofDZ7Sjqpb3FhMevQyBJDCTXpDMACApxCkJgzaVSqVtEwnG6fSlWDA3trB25CuT49lIyUJNralxIVbmVMQix6nZb+fD6VihO7sVkMDMdq1nPGfOBNAphCcEgeG28dxxCq7e2cqnMwemwmM2fPISNlDHqdlj5zczIZTOrYBA7uc2KzGBhOhNXIGekEOIXgsMJq1jOQy91FSVUzHk0kF89fxI3p49DrtPjT6mgnv7gci9nIlLRx9BcXFcFpexcTRnNOEqIsclWDg0AmExy+E2k10afa3s72A+V8knuaOXOXsPbHN1JyuopnXn2H+sYWBpM+bjStDhc79h5moOTkFM6VSa/IBDiFIJAYHWpVNBIF5Y0cLqk7+mle5YlfXDfz8jFxVvbnFzItM5XFs7KJsIUyGKslhIraBsYmxhIXFc5AWRNTaDi1H71Ww3BcnV4fAU4hCLjcXcpjr+z9uMre/kfgNc44Vm4vGxNnHetqOkm3z4ckSRSdrCRjfBKDue+JP1NyuoqPXnocRaOhP41GxuXuQq/VMJyqBoePACcTBBrbOi6rsrcvAl7jH7buLt3V0u4mPNTIycpaik5WcN3PHsLhdDGYGnsjNQ1NlFXUMJBRr6e9w8NwWto7OaOUACcTHJr5qqdP1bahqio9dFotDmcHp6rrGUxORiqqCrIs8XW1Ot2ckUeA0xC8akx65bLocHPsjJyZJCfGMWHsKKZPmoCi0eDPxPFJTEodw5zsTAY6WVmDs6UKo15hKLVNTvYer/kVUE8Akwlin+ZVnmhzdhJmMaPXaVm+4AL0Oi2DiYsKZ+Wi2fjjdnsIMWoZTkOLqxHIJ8DJBLe/HSisxWQ00N8Xh45xvnKPFaNVNAwnt7iuiCAgE9w+sbd2UF3fSJ9b73uCiLBQzkenp4um+jKG0+xwU3i66ShBQCa41YSF6Ouq6uz0ufPGyzlSVEanp4tzdfREOYnRIQynprGdM54jCMgEudExobXbdu2hT2bKGL4zfTJ6nZZz9da2nSRGhzKco2X2ImA/QUAmyHX7fF3RxnY+2XuEPrGRNjo9XfTX6enCnz2HC4i3uBlOm7OTTw6fPkiQUBCIjwzhg+1bGZcUT2JsFA6ni7+89RFhlhBGxUZSeroaRVH43opF9FfT0MQzL7/CkumJ9OdwdeLp8tHe4cHt8eJ0d7nzyxqKgQ0ECYUgF2rSh3LGrIx41j/zIvffdRvhVgu3XXcpfeZNm4Q/7k4PbR6FkJjJhFrM9AmTJI6VnOJ3z79yN/ApcIAgoyHIzZuS+HhsuFmRJYlRkUb+vuMwaeOTsZiNDKWmvpHX3/+Uu266ghmT00iKjyEpPoak+BhGx0cTajETF/7RklNVqtTm5G2CjExwuzzEoDXwD3qthqwxOtb/xzMcKSzDH4fTxZbtn3tX3Hb/a2UVNblJ8TH4s2PPIe76nsSjP5NX82UpgI0AJxHcNt90SeYqa4iBgfYX1JCTNZ0L52STkTKGqjo7R4vL3U9t/NsXhWUVjwDbgc+Pbv3TbIvZRH8bt3zIZfNeJjMFNn+gcqwUXv/Qx+3XyKSNAacb78N/8u3Zm88KoJkAJCFMZmiLgYuBfOB54Dj/bdXiC6TN99+xnqSEGHp0erp45e2PWDHvFbLSoKwSPtqjkjZWYnomGPScdaoGJl3e/YrDxQ0EIAUhj6HlARv4qqt+/QMZe0sbSQkxHC4oYffBLdxxbR7x0WBvhpffUVn7AwlF4SuS4uDqi6Xk599UCUQKwvmyWUz8e8Z4lsyaAv/8xAH2577FygVHeOROetmb4bk3VX7+TxKKwqBsFhQClIJwPtY9cpd8+w1Lpeg3P1Ix6GH9z97DoOesyjp4cYuPu2+UMRsZUkMzXQQoBeGcpCax6fkHNVfPzaKXyUAvg56ztu+BonKVX31fRlEYkrsT3v9MdRKgFIRzcdt/3Ke5em4WZ6WMljhZBeFWyC+GD75QuXKxxOJrJXrkFoKqQnY6fh0tgbomXidAyQjDmpTC1ROTwd7MWRdMhpLTKvuPqoSY4bc/kZiaRi9nB2z7QiU7nUF9fli1Ay8RoBSE4Rh+uErOPF6mkpwgEWmjl0EPF86S8GfzByrXL5UYTEUtrH3KVwC4CVAywnAempcjRdbaYUwCw6qoBa0CibEMak+eirMDNwFMRhiKYe0a6dLJKVBczjn5y1aVqy6UGMpr21TOKCCAyQhDeWjVEjmFM3RahnW4CGZPkTDoGVRpBegUeuwkgMkIg8l5+lfyzVNSweuFKRMYktcLb+1QmT+NIZVXqczNljjjMAFMRvDHcNVi6U+rL5VsnFFtB5OBIe06BFdeKDGc3XlgNNAKlBHAZARUVbXxP2wLZ0jbn7hXzrKG0Ku+EYwGicG4O2FvnkrGOIZlMUNesVpOgJMIMqqqGoCLgMuApPbmznhjiHaURivnAZX33ntvzK0Lnps/LqGVPruPgMkAUybg19ZdkDoGUkYzpLpGOHpC5Z4nfDtyC1hIAFMIcKqqLgJWAhM72rtiSo80jK+3NxtOHrdz+P1aCt+18/COS3nyzo9n56yIZ+VFt0DkT/EkNqHrrgPXfjzyWyRY9+GPuxOOlaos+47EcCpqweOF3AJaCHAKAURV1ZnASmCGp4vw8gpSP9uDeUIKbLhlCyc+bcTT3I0/9flO3ss/wXsPnaCHbJBIvyiKy+9cxei5v0SnbQRzEXRUgfM96NgGvlpO1YBBxzlxOFUcTnrsJcApjFCqqk4ClgKLAWtzC6lFJVjzj8LnB+DQMXC46LXxSTj2Vj3nw+dWOfZWPenzajl0ehzPvhpBfNRs5k6DC3JWERPtJSWhhAnxVagR+3ls48v88IoirCEMqbaRHp8R4BRGIFVVV1dVs3H/Idh3GPYdgauW0uvZV/nWVDfA5vdg83ucofDC+jT++FIai+csIj57BVfefSEP/KiOudkMqqlVdQOfE+AURqjCInjwaf5fdftgXx7sywNnSwtPrvkxzm6ZXzy5kzlTtjE6TiIijF7NrXCkGPbmUU4QUBDQmiW+qe6uZsaOisVkNJA+bjUO55UUl1fxmz++yk+vL8agl1g+X2Lj274agoCCABLfWIJxDyZjOn0sZhPpyYlcfVEFC2ZI9GhshdwCqgkCMsLXptdxVs6EUwxUWFbBxHFu+pyspMcOgoCMMKSYcWYaGvFPpZfHdYKZk0czUO7xQqZOYCAPQUBGGJIhRKG1nSHpXX8lOyOF/jo9XcSEvU9/WoUeEQQBGeEb8bhK+ckqB3qdlv6cHW5SRrfRn81Kj7EEAZkgIOHj2+Jt28rcnEwG8vl8yBJfEh9Jj3SCgMIIFRMDt17LWemp9Lr1Wr7CrHEzfXUCgzGG6Ji+OoHmajfOBg/9aWUtYVZIiqeXtxuq6ujl8zm5dVkBet08Bmppc6LTSfSnKDBzEsrefFYAi4AIYDfwJlBDAFEIAorFxOyblzEYYxTMvnkZOj3IGr4kKRFWxMKC2fRSNGA206vZfojM8Un409TaRtoozmpth537Jbq1UxcsXTZqQX19PdNTYpmXk3FDrb35989u2rqnsKyiGHgWOMgIpzBC1dXBs69y1q3X0uvZV/mK6Tlwz6MMauOTcM+j+PX4L+G9nfDxbr7idz93Mzo+Gn+aW9sZO5NeOw/Awy9nY4sZz6SsEEpPFPHwbVcwITmRfzBcuWTed6vq7N89dKzkln/7y5ZdhWUV3wNqGKEUhG/EZDTgT2FpHt5u+Ndnbew7PZeE5Ch6ONpauemSGUxITmSghJhIEmIilTk5GQtvf+CpN3bnHp/NCCUjfC1J8VBUVIg/rY52tPIu1vxrOgXNlxAZFUWfpsZGZk1NZyjhVgt3rr5sFnAdI5RMkEuKB0c7X4u3qwt/jpecZnveVMwxM9EbDPRn1ngxGQ0MJyczldFx0d9nhJIR8Pn4Wtodbfjzzs79TJ4yFUmWGchs0HEu9DotC2dlWRmhZISvzdnSyEANTS3UOhlUe0cntfZmPvjsAC++8QFDOVxQks4IJSMMSW+E6jr88nW5GSj3eAmRkVEMptHpZceew1wwJY2br1zCYA4eLWZq2jgzMJkRSGaEsoXDpFRQNHyrJAk63PhlVlQGeuOjAxhNJvzp8nhYNnMC1y1fgNUSwlAyU8dy0bxpjFQKI5Q1FNbcABHh0O0DnRZqamHGZMgrBLeHb5W9GeLGhdJf0clKZKOVwdTX13HHyuWcC71OS3V9YzNQzAikMEKVl8M9j9JL0cDjv4aOTrhuJfx0DagqtLZBVRVYzBAeCk1tfC2jE2DmFMjKhPBwMJmhrbWO8s8M9Lc/v4i5c+dyorQUf8y4iY20cS5OVdfxwFMvbQHcjEAKAcDbDd4u2P4pfLybs9KSISsD5s+Fx+4DnQ463VBbB4fyYfchviTSBtMyITsTYmMhIgKiI+HGq6CiEvYdhgN5UFEHHW1VPLxaT59OTxfh46fR6enCH29XF5fMy+JcFJVV8IN/2bCt3eW+nRFKIYAVlkFhGSz8Dqy5h16JMTBtMmRPgqWLISwMwsPgP/8NXE5oa4Ujx+Htj6CgFJ5YB7//I5yq5ku8Xc2Mio2kz9ET5YxLXcnxY7vwp6WlhZiIsQxn1/58blv35IvtLvctjGAKQaaiDio+hL99SK+kePj5j+CO+zkvRl8+MRHR9Pl4TzmXpU8FduGPx+Nh3Oh4BuPt7ubVrZ841254YT2wjhFORjh/qpflM47Qp9XRzrt5SxmM6vPR1d6ExWzCH4fTxZN/frN27YYXbgLWEQAUgpyicN4cTR8z6eI4+hwvOY3OOB1/vF1dFBQcb129ZJoVP+obW/j985tLN7278xrgIAFCJsglJXBeWivX85vrPyFr4nj6NLc66Pa2oFGg0+Ohh+rzUVNdzae7dh4+sH/f/aNioxiopqGJnzz4dO6md3fOAw4SQBSEc9bRlstDP2hidnYm/S397kzWv+1Fq4NPduw4UFFZSV1tbXtDQ/1G4EXgbxPGjqK/Vkc76/7wUuHeI4WLgGYCjMzI5ElNgYvm8H+ivfljjC13c/eyl5mdnYE/hu58erz77tbvH83Pm97QUL8AeJEzrrhoboLFbKK/v76zw/7BZweWAc0EIIURSJKkTaqq8uj93HJbJXP27ses0/OtMOghXnme3z62jKZWB/vyCsnOSEHRaOjvyhXd3jkzyQXa+TLDRXNyJtbZm3nsuU0YDxSTYjRxvN3hA5KBMgKQwgglSdImYJOqqnFJo1gLLLJaSVNk2PY5/2v0ethT8WN+9JuXKW6ch6xbyAPXbWNuTib9vbflhU9/8+AvFvJVv4uwhZqf2/wuY/JOMT8imh7pRlP035vtdwHbCUAKI5wkSTXATzhDVdVrJmdwy22VzNm7H/OLm6GuiW/MHDabWmaTMQUunu/k+ME/Mzcnkz41DU04nC43X2VYaLXd/u6OPZz6+ADTzBYOudopcXfQraok6vSZFZ7O9cBawE0AUQggkiRtAjapqhqXNIq1yy9m0dEC0ixmvpFrl4LNWsCEsY2MDVOptGTTw9Xhpqyylg0vvL67oPT0DXxVzqJQmzL5eC3rVZWark4WmcLJNoXQ47qI6KTTns67/95kX7qttWkhUEOAkAhwqqpeA9xyqpI5e/djfnEz1DVx1sJZcPklcMf9fEn2RLj6Upg2voHWYwcp/dML5B/KpcTnIWLpHMLCQ/nnR5752GI25jucHXfh3+oNSeM3Rml1fNrWwqW2CPxp6e7m/oqTW092diwnQEgECVVV44C1rg4WHS0g7c13YNvnsHAWrLgQ7noQLCa4eRXMyvES1naYivc/oG7TG6heL33afT4OOh38vvr0euDnDG31hqTxGys8nVwQEopJlhnMttZm59O1lSEECIkgpKrqNcAtpyqZc6oCs0Hr5nB+LbR/SKRZg+OlvxBRZ6eHy+ej0tNJk7eLYncHelniuMvVesjpuBd4hqGt/mFM/Mb27m6ujYhmKEdcTv6lomw6cIAAIBHEVFWNA9ZVVVVlrLviqqSchqZEoyxT0+XBq6r0kAC9LOPx+SjrdNv/aq/b1uHz3QeUMbw5Fo3m+XBFO2Gx1Uay3ohRlunTqfro8PkocXdgkGVeqK/ZCiwnAEgIfWzAL9ONpgumhYRG2zSKiTMc3d2eL9pbKos6Oj4ENgBuzt/98yzW5Qk6fZZRlpVxBiMmWYMP8KHi8fk44nIWvdZYvwX4JQFAQvi/NBG4FJgJhADNwCHgHeAYgiAIwv+D/wIJ3dDL9E6rVgAAAABJRU5ErkJggg=="
  },
  {
    "width": 75,
    "height": 75,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 38,
    "height": 38,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAklEQVR4AewaftIAAAP+SURBVO3BW2xTBQCA4f/c2tN2vaxbWd3alQ1nhxFG3ECjLCCImgA+aNTwYJRIfFEJStQHjY7ExEQTTSQEXYLh4iUabhoRBEGNCYyMSzYUx+6shU2Edb2s150eASMvPp2zPZl+HyUlJSUlJSUllgqX+ggzRGCa1q1q2lB3m3tdsaj7yuxKZSY71TdwObZl24Fzm5kGiWlY/3jzO+Fab1uZzeK3q4ojky0IVotc6feWLQ+HvJaT50d/wiQRkxRJaArMcr5gUSSF6+KpHE6HlWx+CosiWWoqnS8BjZgkYdKGJ1ra/BVli7kum9fw+sPYHR6yeR2RHKpFVoM+Z/LUhbGjmCBjktNunR9LZnLBOc3WpU3zEEUBTSsSiUYZ7DnODZUeWxCTREzauu/Mu3/G0u1aEayKQmoyw7VYAlVV+Vc2ryUwScSkK/HMdx/tPr1zTihYnEim8Hk9hGqqSKfT3DClFTnTO9aBSSLTc+qP3p60RZFJpCaZ0jT6B/oo6GpuPJHpPHZmZBcmSUxPy8I59lWTeSnuq6jIdnb3nFvWen+walZattn3jLy2VljSvpt9mCAwQ7ZtEtY0hdlU5ljRYJWPEKqGWIJERavuxgSZGbIgzBuNdTSks0fIFUAQIJbgEibJzIDdHwivVJTTaLdBfgrsKjd1/sZlTJIxSNd1dyzOmvNnIy09p/vv8JQ7PDXuk7UW11UJ8RCpdCeBKsjmYDyuRzFJxoA93+hfffwpj+47hLqoLk7Xe300P1/FjnYrc1/diD/0FrZsBw/P20Ih/y390ckLmCRiwOgovr5B1CtxbhEs/EMSuPynRDYpkS4spdKT5cOdnMAkGQN8PtAFWAbUVjuR1zcQqHdSeNFBdb1CQStwT+UFNC2OXdVZct+i5x5oDi9s27zrEyCBARIGLF3W9sxQhLpjneB0eTjYXYfLW82h7nq8LpmhixOsbBkkOhZh+2E/T698cP7yexeseOyh1tXb9/6wFQNEDFAU/qNY5CZdh4lYFkEQ+PFsjNGki6KmIYoiNqulESjHABkDnE5oqAdZglAQJAlmB0GWIRQAj5InlsoTL0jYpByN9QFuyBUK/UAcA0QMGB+HwYtwuAMGhuFIBwyNwOETMDAMHoaIXAsiyxJ3BryTXNc7HD3euubl1UARA0QMqJvN73MbiFkVblEUbgq6O1i8YASvOxfv7upa63dZo2d/6Rxd8ezrS4B+DJIw4IvPNh3cv7dtx10NiBYF92QSr8uJ2OjLEFYjTCR7Y8nk0Lb3t+7Y39Q/9rata8ix3F1+9/cT419ikMA0XB3Xn/z5wK9PRdrfDP81MJw4mUp8fjQxsQWo3egPfF1jtd6emNIG2y4NL+L/4m/Rw3rUMVWOkAAAAABJRU5ErkJggg=="
  },
  {
    "width": 19,
    "height": 19,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAklEQVR4AewaftIAAAGMSURBVO3BQUhTYQDA8f/79vaWbvOJtPlsri00LSRCaUQFIUFBdAsigugkdMgChS4iGIhHAyUIEYm8eKgOBkFUh4TAW1EQJA06hPVe2tIng9nn9oWe3/uoc/5+7PrfNCVjHfwFA41bF3vO5VrsSaU4UFPqy/Kqf3Pi0duXhBBoZB17OBY1O+PJtGWaVmc2ZQ+hIdDwyxW/q+csx0/00pptJyKMFBoCjdGHi9eFMLYaEvX4Gxu1TVldQiOCXkN3216nvs5fO3wwki8cfRy5O8s9QpjoLWda5qa68jw3DLYl0TAJ8GReXfn4iT714/V+t+Slln6m46k9T1HyvgebhBEEWF+nu7TGGbkVbfdKCXuheBL31zEsq1GO9F89TQhBgEoF3BUolk9RlBf4+l1iCI8X764VLp3vfQbUEcAkQCwGGQeUYkc6UeazGyXnpKu/pfwAVAhgEqC5mTffPAreCgWjVo0fyixKK9E4476av1xceD8FKP7VakkdmR4cGx9wMrcBe7Q1/+DOvtwNQvwBA6J+g/PrnbEAAAAASUVORK5CYII="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;